"use client";

import { cn } from "@/lib/utils";
import { type FileUploadTypes } from "@/Types/componentsTypes";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { IconButton } from "@/lib/MtConfig";
import { RxCross2 } from "react-icons/rx";

const FileUpload = ({ fields, placeholders }: FileUploadTypes) => {
    const [fileError, setFileError] = useState<string | null>(null);

    const onDrop = useCallback(
        (acceptedFiles: File[], fileRejections: FileRejection[]) => {
            fields.onChange(acceptedFiles);

            if (fileRejections.length > 0) {
                const errorMessage = fileRejections[0].errors[0].message;
                setFileError(errorMessage);
            } else {
                setFileError(null);
            }
        },
        [fields]
    );

    const customFileValidator = (file: File) => {
        const maxSize = 10 * 1024 * 1024;
        if (file.size > maxSize) {
            return {
                code: "file-too-large",
                message: "File size should not exceed 10MB.",
            };
        }

        return null;
    };

    const handleRemoveFile = () => {
        fields.onChange([]);
        setFileError(null);
    };

    const { getInputProps, getRootProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
        maxFiles: 1,
        validator: customFileValidator
    });

    return (
        <div className="relative w-full">
            {/* Remove image preview */}
            {
                fields.value?.length > 0 && (
                    <div className="group absolute flex justify-center items-center top-0 right-0 z-10 w-full h-full before:absolute berofore:content-[''] before:w-full before:h-full before:hover:bg-red-200 before:opacity-50 before:duration-300">
                        <IconButton variant="gradient" className="rounded-md bg-red-400 opacity-0 group-hover:opacity-100 duration-300" onClick={handleRemoveFile}>
                            <RxCross2 size={26} />
                        </IconButton>
                    </div>
                )
            }

            <div
                {...getRootProps()}
                className={cn(
                    "relative w-full flex flex-col justify-center items-center gap-2 rounded-md py-6 bg-purple-500/20 min-h-40 cursor-pointer",
                    isDragActive && "border-4 border-dashed border-purple-500"
                )}
            >

                <input {...getInputProps()} />

                {fields.value.length > 0 ? (
                    <>
                        <Image
                            src={URL.createObjectURL(fields.value[0])}
                            alt="preview image"
                            fill
                            className="object-cover rounded-md"
                        />
                    </>
                ) : (
                    <div className="relative z-9 flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/images/file.png"
                            alt="upload"
                            className="cursor-pointer"
                            width={40}
                            height={40}
                        />
                        <p className="text-base font-semibold text-gray-600">
                            {isDragActive ? "Drop the file here..." : placeholders}
                        </p>
                    </div>
                )}
            </div>

            {fileError && (
                <p className="mt-2 text-sm font-semibold text-red-400">
                    {fileError}
                </p>
            )}
        </div>
    );
};

export default FileUpload;

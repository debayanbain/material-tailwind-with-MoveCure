interface Window {
    PhonePeCheckout?: {
      transact: (options: {
        tokenUrl: string;
        type: 'IFRAME' | 'REDIRECT';
        callback: (status: string) => void;
      }) => void;
    };
  }
  
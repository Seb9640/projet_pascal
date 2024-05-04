// Convertir un fichier en Blob
export function fileToBlob(file: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result instanceof ArrayBuffer) {
          const arrayBuffer = reader.result;
          const blob = new Blob([arrayBuffer]);
          resolve(blob);
        } else {
          reject(new Error('Failed to read file as ArrayBuffer.'));
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsArrayBuffer(file);
    });
  }

 export function blobToUrl(blob: Blob): string {
    const url = URL.createObjectURL(blob);
    return url;
}


import React, { useRef, useEffect } from 'react';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';

import './App.css';

function App() {
  const viewerDiv = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const initializeWebViewer = async () => {
      const instance: WebViewerInstance = await WebViewer(
        {
          path: 'lib',
        },
        viewerDiv.current as HTMLDivElement
      );

      // Event listener for file input change
      fileInputRef.current?.addEventListener('change', (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
          instance.Core.documentViewer.loadDocument(file, { filename: file.name });
        }
      });
    };

    initializeWebViewer();
  }, []);

  return (
    <div className="App">
      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf"
        style={{ marginBottom: '10px' }}
      />
      <div className='webviewer' ref={viewerDiv}></div>
    </div>
  );
}

export default App;

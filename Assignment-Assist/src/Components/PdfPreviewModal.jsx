import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer';
import '@react-pdf-viewer/viewer/styles/extra.css'; // Import styles

export default function PdfPreviewModal({ pdfUrl, closeModal }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <button
                onClick={closeModal}
                className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
              >
                <svg
                  className="fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M6.83 6.83a1 1 0 011.41 0L9 7.59l1.59-1.6a1 1 0 111.41 1.41L10.41 9l1.6 1.59a1 1 0 11-1.41 1.41L9 10.41l-1.59 1.6a1 1 0 01-1.41-1.41L7.59 9 6.83 7.83a1 1 0 010-1.41z"
                  ></path>
                </svg>
                <span className="text-sm">(Esc)</span>
              </button>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mb-4">
                  <Worker workerUrl={`https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={pdfUrl} />
                  </Worker>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
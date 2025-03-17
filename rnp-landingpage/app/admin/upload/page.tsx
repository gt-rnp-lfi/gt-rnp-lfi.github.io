"use client"

import { useState } from "react";
import { Upload, File, AlertCircle } from "lucide-react";

interface UploadResponse {
  message: string;
  results: {
    processed: number;
    duplicates: number;
    errors: number;
  };
  fileType: string;
  details: string;
}

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<UploadResponse | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [totalResults, setTotalResults] = useState<UploadResponse["results"] | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      file => file.type === "text/plain"
    );
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).filter(
        file => file.type === "text/plain"
      );
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    setTotalResults(null);
    
    const accumulator = {
      processed: 0,
      duplicates: 0,
      errors: 0
    };

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("http://localhost:3001/incidents/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Erro na requisição');
        }

        const result: UploadResponse = await response.json();
        
        // Acumula os resultados
        accumulator.processed += result.results.processed;
        accumulator.duplicates += result.results.duplicates;
        accumulator.errors += result.results.errors;
      }

      // Define o resultado final apenas após processar todos os arquivos
      setUploadStatus({
        message: "Importação concluída com sucesso",
        results: accumulator,
        fileType: "txt",
        details: `Total - Processados: ${accumulator.processed}, Duplicatas: ${accumulator.duplicates}, Erros: ${accumulator.errors}`
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer upload dos arquivos");
    } finally {
      setUploading(false);
      setFiles([]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Upload de Incidentes</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Instruções de Upload</h3>
            <div className="space-y-2 text-gray-600">
              <p>• Cada arquivo pode conter um ou mais incidentes</p>
              <p>• Para múltiplos incidentes no mesmo arquivo, separe-os usando '###' ou '---'</p>
              <p>• Você pode enviar vários arquivos de uma vez</p>
            </div>
          </div>

          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">
              Arraste arquivos TXT aqui ou clique para selecionar
            </p>
            <input
              type="file"
              multiple
              accept=".txt"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Selecionar Arquivos
            </label>
          </div>

          {files.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Arquivos Selecionados:</h3>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded"
                  >
                    <div className="flex items-center space-x-2">
                      <File className="h-5 w-5 text-gray-500" />
                      <span>{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remover
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
              >
                {uploading ? "Enviando..." : "Enviar Arquivos"}
              </button>

              {uploading && (
                <div className="mt-4">
                  <div className="h-1 w-full bg-gray-200 rounded overflow-hidden">
                    <div className="h-full bg-blue-600 animate-[loading_1s_ease-in-out_infinite]" />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    O processamento pode demorar alguns minutos se houver muitos incidentes...
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {uploadStatus && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Resultado do Upload</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-green-600">
                <span>Processados: {uploadStatus.results.processed}</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-600">
                <span>Duplicados: {uploadStatus.results.duplicates}</span>
              </div>
              {uploadStatus.results.errors > 0 && (
                <div className="flex items-center space-x-2 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  <span>Erros: {uploadStatus.results.errors}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
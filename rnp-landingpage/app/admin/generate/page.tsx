"use client"

import { useState } from "react";
import { Send, Info, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface GenerateResponse {
  message: string;
  data: string;
  metrics: {
    contextUtilization: number;
    sourceDocuments: string[];
    similarityScores: {
      documentId: string;
      similarity: number;
    }[];
  };
}

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<GenerateResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao gerar resposta");
      }

      setResponse(data);
    } catch (error) {
      console.error("Erro:", error);
      setError(error instanceof Error ? error.message : "Erro ao gerar resposta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Chat Contextualizado</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Sobre esta Ferramenta</h3>
            <div className="space-y-2 text-gray-600">
              <p>Esta ferramenta permite conversar livremente com a IA, que utilizará a base de incidentes como contexto para suas respostas.</p>
              <p>• Faça perguntas sobre qualquer aspecto dos incidentes</p>
              <p>• A IA consultará a base de dados para fornecer respostas precisas</p>
              <p>• As métricas mostram quanto do conhecimento da base foi utilizado</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sua Pergunta
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="Ex: Quais são as características comuns de um ataque de phishing?"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 flex items-center space-x-2"
            >
              <Send size={20} />
              <span>{loading ? "Gerando..." : "Gerar Resposta"}</span>
            </button>
          </form>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 text-red-600">
              <Info className="h-5 w-5" />
              <span>{error}</span>
            </div>
          </div>
        )}

        {response && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Resposta Gerada</h3>
              <div className="prose prose-blue max-w-none">
                <ReactMarkdown>{response.data}</ReactMarkdown>
              </div>
            </div>

            {response.metrics && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Métricas de Contextualização</h3>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Uso de Contexto
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                      {response.metrics.contextUtilization?.toFixed(1) ?? 0}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${response.metrics.contextUtilization ?? 0}%` }}
                    />
                  </div>
                </div>

                {response.metrics.similarityScores && response.metrics.similarityScores.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-700">Documentos Utilizados</h4>
                    {response.metrics.similarityScores.map((score) => (
                      <div
                        key={score.documentId}
                        className="flex items-start justify-between p-3 bg-gray-50 rounded"
                      >
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <span className="text-sm text-gray-600">{score.documentId}</span>
                        </div>
                        <span className="text-sm font-medium text-blue-600">
                          {(score.similarity * 100).toFixed(1)}% relevante
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 
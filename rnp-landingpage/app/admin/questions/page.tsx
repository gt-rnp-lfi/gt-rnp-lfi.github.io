"use client"

import { useState } from "react";
import { FileText, Info } from "lucide-react";

interface QAResponse {
  success: boolean;
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

export default function QuestionsPage() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("intermediário");
  const [count, setCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<QAResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/ai/qa/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic, difficulty, count }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao gerar Q&A");
      }

      setResponse(data);
    } catch (error) {
      console.error("Erro:", error);
      setError(error instanceof Error ? error.message : "Erro ao gerar Q&A");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Geração de Q&A</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Sobre esta Ferramenta</h3>
            <div className="space-y-2 text-gray-600">
              <p>Esta ferramenta utiliza IA para gerar perguntas e respostas baseadas nos incidentes registrados em nossa base de dados.</p>
              <p>• As Q&As são geradas usando dados reais de incidentes</p>
              <p>• O sistema mostra quais documentos foram utilizados como referência</p>
              <p>• A porcentagem de contextualização indica quanto do conteúdo gerado é baseado em dados reais</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tópico
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: phishing, ransomware, vazamento de dados"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nível de Dificuldade
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="básico">Básico</option>
                <option value="intermediário">Intermediário</option>
                <option value="avançado">Avançado</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantidade de Perguntas
              </label>
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                min={1}
                max={10}
                className="w-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
            >
              {loading ? "Gerando..." : "Gerar Q&A"}
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
              <h3 className="text-xl font-bold mb-4">Q&A Gerado</h3>
              <pre className="whitespace-pre-wrap text-gray-700 font-sans">{response.data}</pre>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Métricas de Contextualização</h3>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Uso de Contexto
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    {response.metrics.contextUtilization.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${response.metrics.contextUtilization}%` }}
                  />
                </div>
              </div>

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
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
"use client"

import { useState } from "react";
import { Search as SearchIcon, AlertCircle, Info } from "lucide-react";

interface SearchResult {
  id: string;
  score: number;
  values: any[];
  metadata: {
    content: string;
    source: string;
    timestamp: string;
  };
}

interface SearchResponse {
  results: SearchResult[];
  metrics: {
    totalFound: number;
    totalReturned: number;
    averageSimilarity: number;
  };
}

interface ErrorResponse {
  message: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [topK, setTopK] = useState("100");
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3001/incidents/search?query=${encodeURIComponent(query)}&topK=${topK}`
      );
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error((data as ErrorResponse).message || 'Erro na busca');
      }

      // Agora podemos usar diretamente a resposta da API
      setSearchData(data as SearchResponse);
    } catch (error) {
      console.error('Erro na busca:', error);
      setError(error instanceof Error ? error.message : 'Erro ao realizar a busca');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Consulta à Base de Incidentes</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Sobre a Consulta</h3>
            <div className="space-y-2 text-gray-600">
              <p>Esta ferramenta permite buscar incidentes similares na base de dados usando processamento de linguagem natural.</p>
              <p>• Digite palavras-chave ou descrições relacionadas ao incidente</p>
              <p>• Os resultados são ordenados por similaridade (0-1)</p>
              <p>• Apenas resultados com similaridade igual ou acima de 60% são retornados</p>
              <p>• Quanto maior o score, mais relevante é o resultado</p>
            </div>
          </div>

          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Buscar por
              </label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: phishing, ransomware, vazamento de dados..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número máximo de resultados
              </label>
              <input
                type="number"
                value={topK}
                onChange={(e) => setTopK(e.target.value)}
                className="w-32 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                max="1000"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 flex items-center space-x-2"
            >
              <SearchIcon size={20} />
              <span>{loading ? "Buscando..." : "Buscar"}</span>
            </button>
          </form>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              <span>{error}</span>
            </div>
          </div>
        )}

        {searchData && searchData.metrics && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-2">
              <div className="space-y-1">
                <p className="text-blue-800">
                  <strong>Total de incidentes encontrados:</strong> {searchData.metrics.totalFound}
                </p>
                <p className="text-blue-800">
                  <strong>Incidentes retornados:</strong> {searchData.metrics.totalReturned}
                </p>
                <p className="text-blue-800">
                  <strong>Similaridade média dos resultados retornados:</strong> {(searchData.metrics.averageSimilarity * 100).toFixed(1)}%
                </p>                 
              </div>
            </div>
          </div>
        )}

        {searchData && searchData.results && (
          <>
            <div className="space-y-4">
              {searchData.results.map((result) => (
                <div key={result.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm text-gray-500">ID: {result.id}</span>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Similaridade: {(result.score * 100).toFixed(1)}%
                    </span>
                  </div>
                  
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap text-gray-700 font-sans text-sm bg-gray-50 p-4 rounded">
                      {result.metadata.content}
                    </pre>
                  </div>
                  
                  <div className="mt-4 flex justify-between text-sm text-gray-500">
                    <span>Fonte: {result.metadata.source}</span>
                    <span>Data: {new Date(result.metadata.timestamp).toLocaleString('pt-BR')}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {searchData && searchData.results && searchData.results.length === 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-600">Nenhum resultado encontrado para sua busca.</p>
          </div>
        )}
      </div>
    </div>
  );
} 
import "./App.css";

function App() {
  console.log("Dark mode enabled:", window.matchMedia('(prefers-color-scheme: dark)').matches);
  return (
    <>
      <div className="min-h-screen bg-surface p-8 space-y-4">
        <h1 className="text-3xl font-bold text-text mb-8">Renk Paleti Test</h1>
        
        {/* Primary colors */}
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
          Primary Button
        </button>
        
        {/* Avocado colors */}
        <div className="bg-avocado-100 text-avocado-800 p-4 rounded">
          Avocado Background
        </div>
        
        {/* Semantic colors */}
        <div className="bg-success-500 text-white p-4 rounded">
          Başarı Mesajı
        </div>
        
        <div className="bg-error-500 text-white p-4 rounded">
          Hata Mesajı
        </div>
        
        <div className="bg-warning-500 text-black p-4 rounded">
          Uyarı Mesajı
        </div>
        
        <div className="bg-info-500 text-white p-4 rounded">
          Bilgi Mesajı
        </div>
        
        {/* Surface colors */}
        <div className="bg-surface border border-outline p-4 rounded">
          Surface Container
        </div>
        
        {/* Text colors */}
        <div className="space-y-2">
          <p className="text-text">Ana metin</p>
          <p className="text-text-secondary">İkincil metin</p>
          <p className="text-text-tertiary">Üçüncül metin</p>
        </div>
      </div>
    </>
  );
}

export default App;
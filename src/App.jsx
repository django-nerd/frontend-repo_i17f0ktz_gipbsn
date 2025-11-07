import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UploadModal from './components/UploadModal';
import Gallery from './components/Gallery';

function App() {
  const [openUpload, setOpenUpload] = useState(false);
  const [items, setItems] = useState([
    {
      id: '1',
      title: 'Cyber Knight Character',
      type: 'model',
      description: 'High-poly hero character with PBR textures and rigging ready for animation.',
      author: 'NovaForge',
    },
    {
      id: '2',
      title: 'Retro Scanlines UI Pack',
      type: 'ui',
      description: 'HUD, menus and notifications inspired by classic arcade displays.',
      author: 'PixelPulse',
    },
    {
      id: '3',
      title: 'Dynamic Weather Mod',
      type: 'mod',
      description: 'Adds storms, fog and seasonal changes with performance-friendly effects.',
      author: 'StormCraft',
    },
  ]);

  const onUpload = ({ title, type, file, description }) => {
    const id = crypto.randomUUID();
    const newItem = {
      id,
      title,
      type,
      description: description || `${file?.name ?? ''}`,
      author: 'You',
    };
    setItems((prev) => [newItem, ...prev]);
    setOpenUpload(false);
  };

  const stats = useMemo(() => ({
    mods: items.filter((i) => i.type === 'mod').length,
    models: items.filter((i) => i.type === 'model').length,
    ui: items.filter((i) => i.type === 'ui').length,
  }), [items]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onUploadClick={() => setOpenUpload(true)} />
      <Hero />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white/70 p-5 shadow-sm">
            <div className="text-3xl font-extrabold">{stats.mods}</div>
            <div className="text-sm text-gray-600">Mods uploaded</div>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white/70 p-5 shadow-sm">
            <div className="text-3xl font-extrabold">{stats.models}</div>
            <div className="text-sm text-gray-600">2D/3D models</div>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white/70 p-5 shadow-sm">
            <div className="text-3xl font-extrabold">{stats.ui}</div>
            <div className="text-sm text-gray-600">UI & effects</div>
          </div>
        </div>
      </section>

      <Gallery items={items} />

      <footer className="mt-10 border-t border-gray-100 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600">
          Built for creators and players. Upload your work and explore community content.
        </div>
      </footer>

      <UploadModal
        open={openUpload}
        onClose={() => setOpenUpload(false)}
        onSubmit={onUpload}
      />
    </div>
  );
}

export default App;

import { useMemo } from 'react';
import { Sparkles, Boxes, ImagePlus, Download } from 'lucide-react';

const typeMap = {
  mod: { icon: Sparkles, color: 'bg-fuchsia-500/10 text-fuchsia-600' },
  model: { icon: Boxes, color: 'bg-blue-500/10 text-blue-600' },
  ui: { icon: ImagePlus, color: 'bg-emerald-500/10 text-emerald-600' },
};

function Card({ item }) {
  const meta = useMemo(() => typeMap[item.type] ?? typeMap.mod, [item.type]);
  const Icon = meta.icon;

  return (
    <div className="group rounded-xl border border-gray-100 bg-white/70 backdrop-blur p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${meta.color}`}>
          <Icon className="h-3.5 w-3.5" />
          {item.type}
        </div>
        <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          <Download className="h-3.5 w-3.5" />
          Download
        </button>
      </div>
      <h3 className="mt-3 text-base font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.description}</p>
      <div className="mt-3 text-xs text-gray-500">by {item.author ?? 'Anonymous'}</div>
    </div>
  );
}

function Gallery({ items = [] }) {
  if (!items.length) {
    return (
      <section id="explore" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-xl border border-dashed border-gray-200 bg-white/60 p-10 text-center">
          <p className="text-gray-600">No uploads yet. Be the first to share a mod, model or UI kit!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="explore" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

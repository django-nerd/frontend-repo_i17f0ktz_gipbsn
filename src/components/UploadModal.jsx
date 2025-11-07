import { useState } from 'react';
import { X, ImagePlus, Boxes, Sparkles } from 'lucide-react';

function UploadModal({ open, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('mod');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;
    onSubmit({ title, type, file, description });
    setTitle('');
    setType('mod');
    setFile(null);
    setDescription('');
  };

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Upload content</h3>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="e.g., Knight character model"
            />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <label className="text-sm font-medium text-gray-700">Type</label>
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setType('mod')}
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm ${type === 'mod' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-700 border-gray-200'}`}
              >
                <Sparkles className="h-4 w-4" /> Mod
              </button>
              <button
                type="button"
                onClick={() => setType('model')}
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm ${type === 'model' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-700 border-gray-200'}`}
              >
                <Boxes className="h-4 w-4" /> 2D/3D Model
              </button>
              <button
                type="button"
                onClick={() => setType('ui')}
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm ${type === 'ui' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-700 border-gray-200'}`}
              >
                <ImagePlus className="h-4 w-4" /> UI / Effects
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <label className="text-sm font-medium text-gray-700">File</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              required
              className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm file:mr-3 file:rounded file:border-0 file:bg-violet-600 file:px-3 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-violet-700"
            />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Short summary of your asset..."
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-violet-700">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadModal;

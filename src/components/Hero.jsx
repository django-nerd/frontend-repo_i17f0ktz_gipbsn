import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] w-full bg-gradient-to-b from-violet-50 via-white to-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/nnNYb3ZFbRxKghMM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/5">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            For gamers and creators
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Share, discover and power-up games with community-made content
          </h1>
          <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg">
            Upload mods, 2D/3D models, UI kits and effects. Follow news, skins and updates from your favorite titles. One hub for players and developers.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#upload" className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2.5 text-sm md:text-base font-medium text-white shadow hover:bg-violet-700">
              <Rocket className="h-4 w-4" />
              Start uploading
            </a>
            <a href="#explore" className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2.5 text-sm md:text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              Explore content
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

export default Hero;

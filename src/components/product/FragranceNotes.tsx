"use client";

import { motion } from "framer-motion";

interface NotesProps {
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
}

export const FragranceNotes = ({ notes }: NotesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5">
      <div className="space-y-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold">Top Notes</span>
        <div className="flex flex-wrap gap-2">
          {notes.top.map((note) => (
            <span key={note} className="px-4 py-2 bg-white/5 border border-white/10 text-xs text-white/70 uppercase tracking-widest">
              {note}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold">Heart Notes</span>
        <div className="flex flex-wrap gap-2">
          {notes.heart.map((note) => (
            <span key={note} className="px-4 py-2 bg-white/5 border border-white/10 text-xs text-white/70 uppercase tracking-widest">
              {note}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold">Base Notes</span>
        <div className="flex flex-wrap gap-2">
          {notes.base.map((note) => (
            <span key={note} className="px-4 py-2 bg-white/5 border border-white/10 text-xs text-white/70 uppercase tracking-widest">
              {note}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

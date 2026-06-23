export default function SectionBadge({ children, dark = false }) {
  return (
    <div className="flex justify-center mb-4">
      <span
        className={`inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-sans font-semibold tracking-widest uppercase ${
          dark
            ? 'bg-gold-DEFAULT/10 text-gold-DEFAULT border border-gold-DEFAULT/30'
            : 'bg-gold-DEFAULT/10 text-gold-dark border border-gold-DEFAULT/25'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-gold-DEFAULT inline-block" />
        {children}
        <span className="w-1.5 h-1.5 rounded-full bg-gold-DEFAULT inline-block" />
      </span>
    </div>
  )
}

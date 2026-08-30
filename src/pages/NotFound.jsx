import { Link } from 'react-router-dom'
import { Motif, MOTIFS } from '../components/Motifs'

export default function NotFound() {
  return (
    <div className="container-luxe flex flex-col items-center gap-8 py-32 text-center">
      <p className="overline">Page not found</p>
      <Motif motif={MOTIFS[2]} color="#AB6246" size={140} />
      <h1 className="max-w-xl font-display text-5xl leading-[1.05] sm:text-6xl">
        This page has worn through.
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-sand">
        The address you followed leads somewhere we do not weave. The collection, though, is where
        it has always been.
      </p>
      <Link to="/" className="btn-primary">
        Return home
      </Link>
    </div>
  )
}
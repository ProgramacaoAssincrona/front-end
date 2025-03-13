import { ReactNode } from 'react'

interface IImageAndTextPageComponent {
  src: string
  text: ReactNode
}

export default function ImageAndTextPageComponent({
  src,
  text
}: IImageAndTextPageComponent) {
  return (
    <div className="flex flex-col items-center gap-8 text-center [&>*>span]:text-secondary">
      <img src={src} alt="img" className="mix-blend-multiply" />
      {text}
    </div>
  )
}

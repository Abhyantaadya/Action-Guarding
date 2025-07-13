import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t border-agspl-red/20",
        "bg-gradient-to-b from-white to-agspl-light-gray/50",
        "p-4 text-start sm:p-6",
        "hover:from-agspl-light-gray/30 hover:to-agspl-light-gray/60",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        "border border-gray-200 hover:border-agspl-red/30",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border-2 border-agspl-red/20">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none font-montserrat text-agspl-blue">
            {author.name}
          </h3>
          <p className="text-sm text-agspl-red font-open-sans font-medium">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-gray-700 font-open-sans leading-relaxed">
        {text}
      </p>
    </Card>
  )
}
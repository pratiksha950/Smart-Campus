function Avatar({ name, size = "medium" }) {
  const SIZE_CLASS = {
    small: "h-6 w-6 text-xs",
    medium: "h-8 w-8 text-sm",
    large: "h-12 w-12 text-lg"
  }
  return (
<div
  className={`bg-white text-black font-bold flex items-center justify-center ${SIZE_CLASS[size]} rounded-full mx-2`}
>
  {name[0]}
</div>  )
}

export default Avatar
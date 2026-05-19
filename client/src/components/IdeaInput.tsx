interface IdeaInputProps {
    idea: string
    onIdeaChange: (value: string) => void
    onGenerate: () => void
  }
  
  export default function IdeaInput({
    idea,
    onIdeaChange,
    onGenerate,
  }: IdeaInputProps) {
    return (
      <div className="flex gap-4 mb-10">
  
        <input
          type="text"
          value={idea}
          onChange={(e) => onIdeaChange(e.target.value)}
          placeholder="Enter your startup idea..."
          className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3 outline-none text-white"
        />
  
        <button
          onClick={onGenerate}
          className="bg-white text-black px-6 rounded-xl font-medium hover:opacity-90 transition"
        >
          Generate
        </button>
  
      </div>
    )
  }
export default function ErrorMessage({ message }) {
  return (
    <p className="flex justify-center items-center min-h-[500px]">
      <span> 🔴{message}</span>
    </p>
  );
}

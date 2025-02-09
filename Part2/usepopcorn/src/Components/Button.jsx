export default function CrazyButton() {
  return (
    <div className="flex justify-center ">
      <div className="flex gap-[4px]">
        <Button message="Jumping">Jumping</Button>
        <Button message="Dancing">Dancing</Button>
      </div>
    </div>
  );
}

function Button({ message, children }) {
  function handleClick(event, message) {
    console.log(event.target);
    console.log(message);
  }
  return (
    <button
      className="p-3 bg-purple-600 text-white rounded cursor-pointer"
      onClick={(event) => handleClick(event, message)}
    >
      {children}
    </button>
  );
}

function PlayButton({ moviname }) {
  function handleClick() {
    console.log(`Playing  ${moviname}`);
  }
  return <button onClick={handleClick}>Play {moviname}</button>;
}
function UploadButton() {
  return (
    <button onClick={() => console.log("Uploading ...")}>Upload Button</button>
  );
}

export default function ToolBar() {
  return (
    <div className="flex gap-2">
      <PlayButton moviname={"Tom and Jerry"} />
      <UploadButton />
    </div>
  );
}

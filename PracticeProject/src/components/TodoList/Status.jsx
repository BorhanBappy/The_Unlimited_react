export default function Status({ listItem ,totalQuantity }) {
  if (!listItem.length)
    return (
      <p className=" text-center">
        <em>Start adding some items in your peking List</em>
      </p>
    );

  const numPacked = listItem.filter((item) => item.packed).length;
  // console.log(numPacked);
  // console.log(packedTrueCount);
  // console.log(listItem.length);
  const percentage = Math.floor((numPacked / listItem.length) * 100);
  // console.log(percentageTrueItems);
  return (
    <footer className="text-center text-xl">
      <em>
        {percentage === 100
          ? `You got everything . Ready for Travel 🦋`
          : ` You have  ${
              listItem.length
            } item in your List, You have packed ${numPacked} and ${percentage.toFixed(
              2
            )} % of Total `}
      </em>
      <p>
        Total Quantity: {totalQuantity}
      </p>
    </footer>
  );
}

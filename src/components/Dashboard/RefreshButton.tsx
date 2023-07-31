export function RefreshButton ({onClick} : {onClick : ()=> Promise<void>}) { // typed as async function since we are fetching data
    return (
        <button
        onClick={() => {onClick()}}
        className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
        Refresh Data
        </button>
    );
  }
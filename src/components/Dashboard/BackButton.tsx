export function BackButton ({onClick} : {onClick : ()=> void}) {
    return (
        <button
        onClick={() => onClick()}
        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        Back
        </button>
    );
}
const UrlInput = () => {
  return (
    <div>
      <p className="text-lg font-semibold">URL</p> <br />
      <input
        required
        type="text"
        placeholder="https://sujonsheikh.com/"
        className="w-full rounded border-2 border-red-500 py-2 px-4 text-slate-500 text-lg"
      />
    </div>
  );
};

export default UrlInput;

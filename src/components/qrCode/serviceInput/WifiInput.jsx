const WifiInput = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-lg mb-1">Network name (SSID) *</p>
        <input
          required
          type="text"
          placeholder="Home wifi"
          className="w-full rounded border-2 border-red-500 py-2 px-4 text-slate-500 t ext-lg"
        />
      </div>

      <div>
        <p className="text-lg mb-1">Network password</p>
        <input
          required
          type="text"
          placeholder="Wifi password"
          className="w-full rounded border-2 border-red-500 py-2 px-4 text-slate-500 text-lg"
        />
      </div>
    </div>
  );
};

export default WifiInput;

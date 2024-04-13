/* eslint-disable @typescript-eslint/no-explicit-any */
const ColorCode = ({ data }: any) => {
  const pallet = data?.data;

  return (
    <div className="lg:w-7/12 mx-auto space-y-4 text-center">
      <section className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 border-b pb-4 ">
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: pallet?.primary?.hex }}
        ></div>
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: pallet?.secondary?.hex }}
        ></div>
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: pallet?.accent?.hex }}
        ></div>
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: pallet?.light?.hex }}
        ></div>
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: pallet?.dark?.hex }}
        ></div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 border-b pb-4">
        <p className="text-xs font-light tracking-widest">
          {pallet?.primary?.hex}
        </p>
        <p className="text-xs font-light tracking-widest">
          {pallet?.secondary?.hex}
        </p>
        <p className="text-xs font-light tracking-widest">
          {pallet?.accent?.hex}
        </p>
        <p className="text-xs font-light tracking-widest">
          {pallet?.light?.hex}
        </p>
        <p className="text-xs font-light tracking-widest">
          {pallet?.dark?.hex}
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 border-b pb-4">
        <p className="text-xs font-light tracking-widest">
          rgb( {pallet?.primary?.rgb?.r}, {pallet?.primary?.rgb?.g},{" "}
          {pallet?.primary?.rgb?.b}, {pallet?.primary?.rgb?.a},)
        </p>
        <p className="text-xs font-light tracking-widest">
          rgb( {pallet?.secondary?.rgb?.r}, {pallet?.secondary?.rgb?.g},{" "}
          {pallet?.secondary?.rgb?.b}, {pallet?.secondary?.rgb?.a},){" "}
        </p>
        <p className="text-xs font-light tracking-widest">
          rgb( {pallet?.accent?.rgb?.r}, {pallet?.accent?.rgb?.g},{" "}
          {pallet?.accent?.rgb?.b}, {pallet?.accent?.rgb?.a},){" "}
        </p>
        <p className="text-xs font-light tracking-widest">
          rgb( {pallet?.light?.rgb?.r}, {pallet?.light?.rgb?.g},{" "}
          {pallet?.light?.rgb?.b}, {pallet?.light?.rgb?.a},){" "}
        </p>
        <p className="text-xs font-light tracking-widest">
          rgb( {pallet?.dark?.rgb?.r}, {pallet?.dark?.rgb?.g},{" "}
          {pallet?.dark?.rgb?.b}, {pallet?.dark?.rgb?.a},){" "}
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 border-b pb-4">
        <p className="text-xs font-light tracking-widest">
          hsl( {pallet?.primary?.hsl?.h}, {pallet?.primary?.hsl?.s},{" "}
          {pallet?.primary?.hsl?.l}, {pallet?.primary?.hsl?.a},)
        </p>
        <p className="text-xs font-light tracking-widest">
          hsl( {pallet?.secondary?.hsl?.h}, {pallet?.secondary?.hsl?.s},{" "}
          {pallet?.secondary?.hsl?.l}, {pallet?.secondary?.hsl?.a},){" "}
        </p>
        <p className="text-xs font-light tracking-widest">
          hsl( {pallet?.accent?.hsl?.h}, {pallet?.accent?.hsl?.s},{" "}
          {pallet?.accent?.hsl?.l}, {pallet?.accent?.hsl?.a},){" "}
        </p>
        <p className="text-xs font-light tracking-widest">
          hsl( {pallet?.light?.hsl?.h}, {pallet?.light?.hsl?.s},{" "}
          {pallet?.light?.hsl?.l}, {pallet?.light?.hsl?.a},){" "}
        </p>
        <p className="text-xs font-light tracking-widest">
          hsl( {pallet?.dark?.hsl?.h}, {pallet?.dark?.hsl?.s},{" "}
          {pallet?.dark?.hsl?.l}, {pallet?.dark?.hsl?.a},){" "}
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 ">
        <p className="text-xs font-light tracking-widest">
          hsv( {pallet?.primary?.hsv?.h}, {pallet?.primary?.hsv?.s},{" "}
          {pallet?.primary?.hsv?.v}, {pallet?.primary?.hsv?.a},)
        </p>
        <p className="text-xs font-light tracking-widest">
          hsv( {pallet?.secondary?.hsv?.h}, {pallet?.secondary?.hsv?.s},{" "}
          {pallet?.secondary?.hsv?.v}, {pallet?.secondary?.hsv?.a},){" "}
        </p>
        <p className="text-xs font-light tracking-widest">
          hsv( {pallet?.accent?.hsv?.h}, {pallet?.accent?.hsv?.s},{" "}
          {pallet?.accent?.hsv?.v}, {pallet?.accent?.hsv?.a},){" "}
        </p>
        <p className="text-xs font-light tracking-widest">
          hsv( {pallet?.light?.hsv?.h}, {pallet?.light?.hsv?.s},{" "}
          {pallet?.light?.hsv?.v}, {pallet?.light?.hsv?.a},){" "}
        </p>
        <p className="text-xs font-light tracking-widest">
          hsv( {pallet?.dark?.hsv?.h}, {pallet?.dark?.hsv?.s},{" "}
          {pallet?.dark?.hsv?.v}, {pallet?.dark?.hsv?.a},){" "}
        </p>
      </section>
    </div>
  );
};

export default ColorCode;

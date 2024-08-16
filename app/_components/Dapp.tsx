import { Handlers } from "./Handlers";

export function Dapp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="p-8 rounded-2xl shadow-lg sm:max-w-md border">
        <div className="flex flex-col items-center gap-8">
          <Handlers />
        </div>
      </div>
    </div>
  );
}

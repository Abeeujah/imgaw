"use client";

import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa6";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { abi } from "../../abi";
import { config } from "../../wagmi";
import { Button } from "./Button";
import { Address } from "viem";

export function Handlers() {
  const account = useAccount({ config });
  const { writeContract } = useWriteContract();
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as Address;
  const { data, refetch } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "getCount",
    account: account.address,
    query: { enabled: false, initialData: 0x0 },
  });

  return (
    <>
      <div className="text-6xl font-bold text-primary">
        <span>{data?.toString()}</span>
      </div>
      <div className="flex gap-4 justify-center flex-wrap md:flex-nowrap">
        <Button
          text="decrement"
          icon={FaArrowLeft}
          left
          onClick={() =>
            writeContract({
              abi,
              address: contractAddress,
              functionName: "decCount",
            })
          }
        />
        <Button text="get" icon={FaCheck} right onClick={refetch} />
        <Button
          text="increment"
          icon={FaArrowRight}
          right
          onClick={() =>
            writeContract({
              abi,
              address: contractAddress,
              functionName: "incCount",
            })
          }
        />
      </div>
    </>
  );
}

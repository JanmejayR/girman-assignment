
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
export default function DialogCloseButton({firstName, lastName, city, phoneNumber}) {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-zinc-900 h-10 px-2 text-zinc-50 rounded-md">Fetch Details</Button>
      </DialogTrigger>
      <DialogContent className=" h-[26rem] w-[20rem]  sm:max-w-md sm:h-[30rem] sm:w-[32rem] flex flex-col gap-0 bg-white">    
      <h1 className="text-2xl font-bold">Fetch Details</h1>
      <p className="text-zinc-500"> Here are the details of following employee.</p>

      <div className="py-2 font-bold leading-5">
      <p>Name: {firstName}&nbsp;{lastName}</p>
      <p>Location: {city}</p>
      <p>Contact Number: {phoneNumber}</p>
      </div>

     
        <p className="pb-2">Profile Image :</p>
        <Image
          src="/cardImage.png"
          height={207}
          width={207}
          className=" h-36 w-36 sm:h-[207px] sm:w-[207px]"

        /> 
        <div className="flex justify-end">
        <DialogFooter className="  w-1/3  sm:w-full mt-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className=" hover:bg-gray-200">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
        </div>

      </DialogContent>
    </Dialog>
  )
}

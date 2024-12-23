import { Card, CardContent } from "@/components/ui/card";
import { MdCloudQueue, MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
export default function EventLeftSide() {
  return (
    <div className="space-y-8">
      <Card>
        <CardContent>
          <div className="py-8 text-center">
            <h1 className="font-black text-2xl mb-3">Abu Dhabi Grand Prix</h1>
            <p>
              Yas Marina Circuit - Yas Island - Abu Dhabi United Arab Emirates
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">From</h3>
              <p>Dec 5, 2024 at 3:00 PM </p>
            </div>
            <div>
              <h3 className="font-bold">To</h3>
              <p>Dec 8, 2024 at 10:00 PM </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex justify-between items-center  py-4 h-16">
          <Link to="" className="font-bold">
            Add to your calendar
          </Link>

          <div className="flex justify-between gap-x-8">
            <Link
              className="border-b-2 border-hcl-blue  hover:border-hcl-blue hover:font-bold font-bold"
              to=""
            >
              iCalendar
            </Link>
            <Link
              className="border-b-2 border-b-transparent hover:border-hcl-blue hover:font-bold"
              to=""
            >
              Gmail
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-hcl-slate text-white">
        <CardContent className="flex justify-between items-center  py-4 h-16 ">
          <h5>Starts in</h5>
          <p>2d 19hs 40min 17seg</p>
        </CardContent>
      </Card>

      <div className="flex gap-x-8">
        <p className="flex items-center gap-x-1.5">
          <MdOutlineWatchLater />
          <span>Time at Location: 00:43:20</span>
        </p>
        <p className="flex items-center gap-x-1.5">
          <MdCloudQueue />

          <span>26.3°C Clear</span>
        </p>
      </div>
    </div>
  );
}

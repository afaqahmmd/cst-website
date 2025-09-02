// import { cn } from "@/lib/utils";

// interface TimelineItem {
//   year: string;
//   title: string;
//   description: string;
// }

// interface TimelineProps {
//   items: TimelineItem[];
//   className?: string;
// }

// export function Timeline({ items, className }: TimelineProps) {
//   return (
//     <div className={cn("relative", className)}>
//       {/* Vertical line */}
//       <div className="absolute left-[7px] top-1 bottom-0 w-[2px] bg-[#585757]" />

//       {/* yellow dot */}
//       <div className="relative z-10 flex h-4 w-4 items-center justify-center">
//         <div className="h-[12px] w-[10px] rounded-full bg-[#FFAB40]" />
//       </div>

//       {/* Timeline items */}
//       <div className="space-y-8 ">
//         {items.map((item, index) => (

//           <div key={index} className="relative flex items-start gap-5">
//             {/* Dot */}
//             <div className="relative z-10 mt-1 flex h-4 w-4 items-center justify-center">
//               <div className="h-[12px] w-[12px] rounded-full bg-[#19817A]" />
//             </div>

//             {/* Content */}
//             <div className="flex-1 min-w-0">
//               <h3 className="text-xl font-semibold text-foreground mb-2">
//                 {item.year}
//               </h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { cn } from "@/lib/utils";

interface TimelineItem {
  year: string;
  title?: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between h-full", // make it fill parent & distribute items
        className
      )}
    >
      {/* Vertical line spanning full height */}
      <div className="absolute left-[8px] top-1 bottom-0 w-[2px] bg-[#585757]" />
      {/* yellow dot */}
      <div className="relative z-10 flex h-4 w-4 items-center justify-center">
        <div className="h-[12px] w-[10px] rounded-full bg-[#FFAB40]" />
      </div>
      {/* Timeline items */}
      <div className="flex flex-col justify-between h-full">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start gap-5">
            {/* Dot */}
            <div className="relative z-10 mt-1 flex h-4 w-4 items-center justify-center">
              <div className="h-[12px] w-[12px] rounded-full bg-[#19817A]" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.year}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { JoinUs } from "../containers/Sections";
import { useWindowSize } from "../hooks/use-window-size";
import { HomeLayout } from "../layouts/Home";

type Member = {
  image: string;
  name: string;
};

export default function Members() {
  const [activeMember, setActiveMember] = useState<Member>();

  return (
    <HomeLayout>
      {/* members avatar */}
      <section className="px-4 md:px-12 xl:px-40 py-12 md:py-28 border-b min-h-[50vh]">
        {activeMember && (
          <MemberItem
            member={activeMember}
            deselect={() => setActiveMember(undefined)}
          />
        )}
        <MembersList members={members} select={(m) => setActiveMember(m)} />
      </section>
      {/* members avatar end */}

      <JoinUs />
    </HomeLayout>
  );
}

type Custom = {
  i: number;
  small: boolean;
};

const memberVariants: Variants = {
  animate: ({ i, small }: Custom) => {
    let weight = small ? 6 : 12;
    let mod = i % 2;
    let offset = (mod ? -0.4 : 1) * -weight;
    let offsetRev = (mod ? 1 : -0.4) * -weight;

    return {
      y: [offset, offsetRev, offset],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    };
  },
};

type MembersListProp = {
  members: Member[];
  select: (member: Member) => void;
};

function MembersList({ members, select }: MembersListProp) {
  const { width } = useWindowSize();

  return (
    <div className="z-20 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-6 sm:gap-y-8 md:gap-8 lg:gap-12">
      {members.map((member, i) => (
        <motion.div
          key={member.image}
          className="relative w-16 h-16 sm:w-32 sm:h-32 md:w-28 md:h-28 rounded-full cursor-pointer mx-auto"
          variants={memberVariants}
          animate="animate"
          whileHover={{
            scale: 1.3,
          }}
          whileTap={{
            scale: 1.3,
          }}
          layoutId={member.image}
          onClick={() => select(member)}
          custom={{ i, small: width < 640 }}
        >
          <Image
            className="object-cover rounded-full"
            src={member.image}
            layout="fill"
            alt={member.name}
          />
        </motion.div>
      ))}
    </div>
  );
}

type MembersItemProp = {
  member: Member;
  deselect: () => void;
};

function MemberItem({ member, deselect }: MembersItemProp) {
  return (
    <div className="fixed z-10 inset-0 h-screen flex items-center justify-center mb-24">
      <div
        className="absolute -z-10 inset-0 bg-transparent backdrop-blur-sm"
        onClick={deselect}
      />
      <div className="px-20 py-8 rounded-2xl border border-zinc-200 bg-white">
        <motion.div
          className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full cursor-pointer mx-auto"
          layoutId={member.image}
          onClick={deselect}
        >
          <Image
            className="object-cover object-center rounded-full"
            src={member.image}
            layout="fill"
            alt={member.name}
          />
        </motion.div>
        <div className="flex justify-center mt-6 sm:mt-8">
          <h3 className="bg-gray-100 text-center text-sm font-semibold px-6 py-1 rounded-full">
            {member.name}
          </h3>
        </div>
      </div>
    </div>
  );
}

const members: Member[] = [
  {
    image: "/images/members/george.jpg",
    name: "George Teke",
  },
  {
    image: "/images/members/ebizimor.jpg",
    name: "Ebizimor",
  },
  {
    image: "/images/members/theophilus.jpg",
    name: "Theophilu",
  },
  {
    image: "/images/members/abraham-ekio.jpg",
    name: "Abraham Ekio",
  },
  {
    image: "/images/members/ebitare.jpg",
    name: "Ebitare",
  },
  {
    image: "/images/members/ericafes.jpg",
    name: "Eric Afes",
  },
];

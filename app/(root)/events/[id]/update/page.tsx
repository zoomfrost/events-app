import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const UpdateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="wrapper bg-primary-50 bg-dotted-pattern bg-cover bg-center md:py-10">
        <h3 className="font-bold text-2xl text-left sm:text-center">
          Update Event
        </h3>
      </section>

      <div className="wrapper my-5 ">
        <EventForm userId={userId} type="Update" />
      </div>
    </>
  );
};

export default UpdateEvent;

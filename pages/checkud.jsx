import React from "react";
import Head from "next/head";
import Select from "@/components/Select";
import { useState } from "react";

export default function checkud() {
  const [showForm, setShowForm] = useState(false);
  const [showSelect, setShowSelect] = useState(true);
  return (
    <>
      <Head>
        <title>Solbiler ApS | Check ud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Select />
    </>
  );
}
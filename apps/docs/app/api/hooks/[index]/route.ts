import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

type HookData = Readonly<{
  id: number;
  title: string;
  description: string;
}>;

const filePath = path.join(process.cwd(), "app", "hooks.json");

async function loadData(): Promise<HookData[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error loading data:", err);
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

export async function GET(
  request: Request,
  { params }: { params: { index: string } },
) {
  const { index } = params;

  if (isNaN(Number(index))) {
    return NextResponse.json(
      { error: "Index must be a number." },
      { status: 400 },
    );
  }

  try {
    const data: HookData[] = await loadData();
    const hook = data[Number(index)];

    if (!hook) {
      return NextResponse.json(
        { error: "Couldn't find the requested hook." },
        { status: 404 },
      );
    }

    return NextResponse.json(hook);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

import { z } from "zod";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

// type Tour = {
//   id: string;
//   name: string;
//   image: string;
//   price: string;
// };

const url = "https://www.course-api.com/react-tours-project";

const fetchData = async (url: string): Promise<Tour[]> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    return result.data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "There was an error...";

    console.log(errorMessage);
    return [];
  }
};

const tours = await fetchData(url);
console.log(tours);

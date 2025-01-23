export const dynamic = "force-static";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function GET() {
  return new Response(
    JSON.stringify({
      name: "targetWeightCaloriesCalculator",
      description:
        "Calculate daily calorie intake to reach your target weight.",
      input: {
        type: "object",
        description: "Input parameters",
        example: {
          weight_kg: 70,
          height_cm: 175,
          target_weight_kg: 65,
          time_frame_days: 40,
        },
      },
      output: {
        type: "string",
        description: "Output response",
        example:
          "Based on your inputs, aim for approximately 1016 calories per day to reach your target weight of 65 kg in 30 days.",
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}

// app/routes/api/energy-intake.ts

export async function POST(request: Request) {
  const data = await request.json();
  const { weight_kg, height_cm, target_weight_kg, time_frame_days } = data.input;

  if (!weight_kg || !height_cm || !target_weight_kg || !time_frame_days) {
    return new Response(
      JSON.stringify({
        output: "Please provide weight, height, target weight, and time frame.",
      }),
      {
        status: 400,
        headers,
      },
    );
  }

  const age = 30;
  const genderFactor = 5;

  const BMR = 10 * weight_kg + 6.25 * height_cm - 5 * age + genderFactor;
  const activityFactor = 1.2;
  const maintenanceCalories = BMR * activityFactor;

  const weightDifference = target_weight_kg - weight_kg;
  const calorieAdjustment = (weightDifference * 7700) / time_frame_days;
  const dailyCalories = maintenanceCalories + calorieAdjustment;

  if (dailyCalories < 300) {
    return new Response(
      JSON.stringify({
        output:
          "The target is unrealistic. Excessive weight loss is not healthy. Please adjust your target weight or time frame.",
      }),
      {
        status: 200,
        headers,
      },
    );
  }

  return new Response(
    JSON.stringify({
      output: `Based on your inputs, aim for approximately ${dailyCalories.toFixed(
        0,
      )} calories per day to reach your target weight of ${target_weight_kg} kg in ${time_frame_days} days.`,
    }),
    {
      status: 200,
      headers,
    },
  );
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers,
  });
}

export const dynamic = "force-static";

export function GET() {
  return new Response(
    JSON.stringify({
      name: "Achieve your target weight",
      description:
        "Calculate daily calorie intake to reach your target weight.",
      input: {
        type: "object",
        description: "Input parameters",
        example: {
          weight_kg: 70,
          height_cm: 175,
          target_weight_kg: 65,
          time_frame_days: 30,
        },
      },
      output: {
        type: "string",
        description: "Output response",
        example:
          "Based on your inputs, aim for approximately 2000 calories per day to reach your target weight of 65 kg in 30 days.",
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      },
    },
  );
}

// app/routes/api/energy-intake.ts

export async function POST(request: Request) {
  // Parse JSON body from the request
  const data = await request.json();
  const { weight_kg, height_cm, target_weight_kg, time_frame_days } = data;

  // Basic validation
  if (!weight_kg || !height_cm || !target_weight_kg || !time_frame_days) {
    return new Response(
      "Please provide weight, height, target weight, and time frame.",
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        },
      },
    );
  }

  // Constants for BMR calculation (assuming age as 30 and male for simplicity)
  const age = 30;
  const genderFactor = 5; // +5 for males, -161 for females

  // BMR Calculation using Mifflin-St Jeor Equation
  const BMR = 10 * weight_kg + 6.25 * height_cm - 5 * age + genderFactor;

  // Assuming a sedentary activity level
  const activityFactor = 1.2;
  const maintenanceCalories = BMR * activityFactor;

  // Calorie adjustment for weight change
  const weightDifference = target_weight_kg - weight_kg;
  const calorieAdjustment = (weightDifference * 7700) / time_frame_days;

  // Calculate final daily calorie intake
  const dailyCalories = maintenanceCalories + calorieAdjustment;

  if (dailyCalories < 300) {
    return new Response(
      JSON.stringify(
        "The target is unrealistic. Excessive weight loss is not healthy. Please adjust your target weight or time frame.",
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  // Create and return the response
  return new Response(
    JSON.stringify(
      `Based on your inputs, aim for approximately ${dailyCalories.toFixed(0)} calories per day to reach your target weight of ${target_weight_kg} kg in ${time_frame_days} days.`,
    ),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}

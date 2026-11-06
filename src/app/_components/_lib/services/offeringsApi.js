import axiosInstance from "@/lib/axios";


export const getOfferings = async ({ page = 0, viewMode = "grid" }) => {
  try {
    const res = await axiosInstance.get(
      "/frontendApis/getAllDetailsOffering",
      {
        params: {
          size: viewMode === "grid" ? 6 : 4,
          page
        }
      }
    );

    const apiData = res?.data?.data?.detailsOfOfferings || [];
    const pagination = res?.data?.data?.pagination || {};


    const styledData = apiData.map((item) => ({
      ...item,
      gradient: `linear-gradient(135deg, ${item.gradientStart}, ${item.gradientEnd})`,
      color: item.gradientEnd,
      buttonColor: item.gradientEnd,
    }));

    return {
      data: styledData,
      pagination
    };

  } catch (error) {
    console.error("Offerings API error:", error);
    throw error;
  }
};
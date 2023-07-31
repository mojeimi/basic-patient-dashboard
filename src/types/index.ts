export type Gender = "M" | "F";
export type VideoUploadStatus = "Complete" | "In Progress" | "Paused";
export type ScoliosisPredictionStatus = "Positive" | "Negative";
export type PointCloudData = [{
  x: number,
  y: number,
  z: number
}];

export type Patient = {
  id: number,
  name: string,
  age: number,
  gender: Gender,
  videoUploadStatus: VideoUploadStatus,
  scoliosisPredictionStatus: ScoliosisPredictionStatus,
  pointCloudData: PointCloudData
}
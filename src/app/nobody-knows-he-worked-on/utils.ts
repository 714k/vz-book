export class ProjectsUtils {
  static getProjectGalleries(galleries: any, projectGalleries: any) {
    return galleries.filter( (gallery: any, idx: any) => {
      return gallery?.title === projectGalleries[idx]?.title
    });
  }

  static getGalleryTypes(galleryTypes: any, projectGalleries: any) { 
    return galleryTypes.filter( (galleryType: any, idx: number) => {
      return galleryType?.text === projectGalleries[idx]?.title 
        && projectGalleries.length > 1;
    });
  }
}


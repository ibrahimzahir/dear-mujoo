import groq from "groq";

export const feedQuery = groq`*[_type == "message"]{
  image{
    asset->{
      url
    }
  },
  _id,
  name,
  title, 
  comment
  
}`;

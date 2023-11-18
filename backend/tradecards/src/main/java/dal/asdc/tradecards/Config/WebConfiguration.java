//package dal.asdc.tradecards.Config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//@Configuration
//public class WebConfiguration {
//
//    @Bean
//    public WebMvcConfigurer getCorsConfiguration(){
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings (CorsRegistry registry){
//                registry.addMapping("/**")
//                        .allowedOrigins("http://localhost:3000/", "http://localhost:8080/", "http://csci5308vm13.research.cs.dal.ca:8080/", "http://csci5308vm13.research.cs.dal.ca:3000/", "http://csci5308vm13.research.cs.dal.ca/", "http://localhost/", "http://172.17.3.148:8080/", "http://172.17.3.148:3000/", "http://172.17.3.148/")
//                        .allowedOriginPatterns("/**")
//                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                        .allowedHeaders("*");
//            }
//        };
//    }
//}
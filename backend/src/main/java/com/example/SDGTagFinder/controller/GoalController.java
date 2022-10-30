//package com.example.SDGTagFinder.controller;
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.SDGTagFinder.model.Goal;
//import com.example.SDGTagFinder.service.GoalService;
//
//
//@RestController
//@RequestMapping("/api")
//public class GoalController {
//        @Autowired
//        GoalService goalService;
//        
//
//        @RequestMapping(value="/goals", method=RequestMethod.POST)
//        public Goal createGoal(@RequestBody Goal goal) {
//            return goalService.createGoal(goal);
//        }
//        @CrossOrigin
//        @RequestMapping(value="/goals", method=RequestMethod.GET)
//        public List<Goal> readGoals() {
//            return goalService.getGoal();
//        }
//        @CrossOrigin
//        @RequestMapping(value="/goals/{goalId}", method=RequestMethod.GET)
//        public Optional<Goal> readGoal(@PathVariable(value = "goalId") Long id) {
//            return goalService.findGoal(id);
//        }
//
//        @RequestMapping(value="/goals/{goalId}", method=RequestMethod.DELETE)
//        public void deleteGoal(@PathVariable(value = "goalId") Long id) {
//        	goalService.deleteGoal(id);
//        }
//        
//
//}
////GoalController
////Indicator 
////Measurement
////IndicatorController MeasurementController
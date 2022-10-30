//package com.example.SDGTagFinder.controller;
//import java.util.List;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.SDGTagFinder.model.Indicator;
//import com.example.SDGTagFinder.model.Measurement;
//import com.example.SDGTagFinder.model.Target;
//import com.example.SDGTagFinder.repository.GoalRepository;
//import com.example.SDGTagFinder.repository.IndicatorRepository;
//import com.example.SDGTagFinder.repository.MeasurementRepository;
//import com.example.SDGTagFinder.repository.TargetRepository;
//
//
//
//@RestController
//@RequestMapping("/api")
//public class MeasurementController {
//  
//	
//	  @Autowired
//	  private MeasurementRepository measurementRepository;
//	  
//      @Autowired
//      private IndicatorRepository indicatorRepository;
//
//
//  @CrossOrigin
//  @GetMapping("/indicator/{indicatorId}/measurements")
//  public ResponseEntity<List<Measurement>> getAllMeasurementsByIndicatorId(@PathVariable(value = "indicatorId") Long indicatorId) throws Exception {
//    if (!indicatorRepository.existsById(indicatorId)) {
//      throw new Exception("Not found Indicator with id = " + indicatorId);
//    }
//
//    List<Measurement> measurements = measurementRepository.findByIndicatortId(indicatorId);
//    return new ResponseEntity<>(measurements, HttpStatus.OK);
//  }

//  @GetMapping("/targets/{id}")
//  public ResponseEntity<Target> getTargetsByGoalId(@PathVariable(value = "id") Long id) {
//    Target target = targetRepository.findById(id)
//        .orElseThrow(() -> new ResourceNotFoundException("Not found Target with id = " + id));
//
//    return new ResponseEntity<>(target, HttpStatus.OK);
//  }

//  @PostMapping("/goals/{goalId}/targets")
//  public ResponseEntity<Target> createTarget(@PathVariable(value = "goalId") Long goalId,
//      @RequestBody Target targetRequest) {
//    Target target = goalRepository.findById(goalId).map(tutorial -> {
//      targetRequest.setGoal(tutorial);
//      return targetRepository.save(targetRequest);
//    }).orElseThrow(() -> new ResourceNotFoundException("Not found Goal with id = " + goalId));
//
//    return new ResponseEntity<>(target, HttpStatus.CREATED);
//  }

//  @PutMapping("/targets/{id}")
//  public ResponseEntity<Target> updateTarget(@PathVariable("id") long id, @RequestBody Target targetRequest) {
//    Target target = targetRepository.findById(id)
//        .orElseThrow(() -> new ResourceNotFoundException("TargetId " + id + "not found"));
//
//    target.setContent(targetRequest.getContent());
//
//    return new ResponseEntity<>(targetRepository.save(target), HttpStatus.OK);
//  }

//  @DeleteMapping("/targets/{id}")
//  public ResponseEntity<HttpStatus> deleteTarget(@PathVariable("id") long id) {
//    targetRepository.deleteById(id);
//
//    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//  }
  
//  @DeleteMapping("/goals/{goalId}/targets")
//  public ResponseEntity<List<Target>> deleteAllTargetsOfGoal(@PathVariable(value = "goalId") Long goalId) {
//    if (!goalRepository.existsById(goalId)) {
//      throw new ResourceNotFoundException("Not found Goal with id = " + goalId);
//    }
//
//    targetRepository.deleteByGoalId(goalId);
//    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//  }
//}
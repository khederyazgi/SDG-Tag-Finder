package com.example.SDGTagFinder.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SDGTagFinder.model.Target;

import java.util.List;


@Repository
public interface TargetRepository  extends JpaRepository<Target, Long> {
	
	List<Target> findByGoalId(Long goalId);
//	
//
//	  @Transactional
//	  void deleteBygoalId(long goalId);

}

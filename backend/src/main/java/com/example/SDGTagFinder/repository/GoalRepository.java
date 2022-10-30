package com.example.SDGTagFinder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SDGTagFinder.model.Goal;



@Repository
public interface GoalRepository extends JpaRepository<Goal, Long> {



}
package com.example.SDGTagFinder.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SDGTagFinder.model.Indicator;
import com.example.SDGTagFinder.model.Target;


@Repository
public interface IndicatorRepository extends JpaRepository<Indicator, Long>  {
	List<Indicator> findByTargetId(Long TargetId);
}

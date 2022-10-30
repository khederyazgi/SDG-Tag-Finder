package com.example.SDGTagFinder.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "Target")
public class Target {
	  @ManyToOne(fetch = FetchType.LAZY, optional = false)
	  @JoinColumn(name = "goal_id", nullable = false)
	  @OnDelete(action = OnDeleteAction.CASCADE)
	  @JsonIgnore
       Goal goal;
    
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="target_id")
            private Long id;
        
        @Column(name="description")
        private String description;

		public Goal getGoal() {
			return goal;
		}

		public void setGoal(Goal goal) {
			this.goal = goal;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}   
        
        
}